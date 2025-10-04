# GPT-OSS Agent Setup

This guide mirrors the Riva agent operations playbook and captures the day-two tasks that keep the GPT-OSS agent reliable in production.

## Prerequisites

- **API Entitlements** – Confirm your organization has GPT-OSS production access and that the associated usage limits meet the expected request volume.
- **Credential Management** – Populate the `.env` file (or your secret manager) with the required values before deployment:
  - `GPT_OSS_API_KEY` – Primary access token for the GPT-OSS cluster.
  - `GPT_OSS_BASE_URL` – Base REST endpoint (e.g., `https://gpt-oss.example.com/v1`).
  - `GPT_OSS_PROJECT_ID` (optional) – Used when routing calls through multi-tenant control planes.
- **Deployment Target** – Verify that the agent host (VM, container, or edge device) has outbound HTTPS access to the GPT-OSS cluster and an ingress rule for any callbacks.
- **Runtime Dependencies** – Install Node.js, `npm`, and any supporting agents/services referenced in `package.json`.

## Service Health Checks

1. **Environment sanity check** – Confirm variables are loaded before starting the agent:
   ```bash
   source .env
   env | grep GPT_OSS
   ```
2. **REST endpoint reachability** – Validate the health endpoint responds quickly:
   ```bash
   curl -sSf "${GPT_OSS_BASE_URL}/health" | jq
   ```
   A healthy response returns status `ok` and service metadata.
3. **Authentication probe** – Issue a minimal authorized request:
   ```bash
   curl -sS "${GPT_OSS_BASE_URL}/models" \
     -H "Authorization: Bearer ${GPT_OSS_API_KEY}" \
     -H "Content-Type: application/json"
   ```
   Confirm the payload lists available GPT-OSS models.

## Sample Inference Prompts

Use these prompts to validate conversation flows after deployment:

- **Intent prediction smoke test**
  ```bash
  curl -sS "${GPT_OSS_BASE_URL}/chat/completions" \
    -H "Authorization: Bearer ${GPT_OSS_API_KEY}" \
    -H "Content-Type: application/json" \
    -d '{
          "model": "gpt-oss-conversation",
          "messages": [
            {"role": "system", "content": "You are Unmute, an empathetic AAC assistant."},
            {"role": "user", "content": "I want to tell my teacher I need a break."}
          ]
        }'
  ```
- **Vocabulary expansion check**
  ```bash
  curl -sS "${GPT_OSS_BASE_URL}/chat/completions" \
    -H "Authorization: Bearer ${GPT_OSS_API_KEY}" \
    -H "Content-Type: application/json" \
    -d '{
          "model": "gpt-oss-conversation",
          "messages": [
            {"role": "system", "content": "You help users express needs in clear phrases."},
            {"role": "user", "content": "Suggest kind ways to ask for help with homework."}
          ]
        }'
  ```

Review the response latency and confidence scores to ensure the agent is behaving as expected.

## Recovery Steps

1. **Credential rotation** – If authentication fails, rotate `GPT_OSS_API_KEY` in your secret store, update `.env`, restart the agent service, and flush any cached tokens.
2. **Service restart** – Restart the agent process (e.g., `pm2 restart unmute-agent` or `docker compose restart agent`) and monitor logs for reconnect attempts.
3. **Fallback routing** – Temporarily point `GPT_OSS_BASE_URL` to a secondary region if the primary cluster reports sustained errors.
4. **Escalation path** – Capture recent logs (`logs/agent-*.log`) and the output of `curl ${GPT_OSS_BASE_URL}/health` and escalate to the GPT-OSS support channel with timestamps and request IDs.

Maintain this document alongside `docs/riva-agent-setup.md` so both speech and language agents follow a consistent operations playbook.
