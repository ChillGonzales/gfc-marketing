
## Server setup for AWS
> Current instance name is `gfc-ubu-web-1` and is an ubuntu server
Visit site at https://www.testing.growthforge.dev/

### Stack
Going to use Caddy server to start with: https://caddyserver.com/docs/install

### Installation
- Installed via package manager instructions found here: https://caddyserver.com/docs/install


### Connection
SSH into server using the following command

```bash
ssh -i "hosting/gfc-web-1.pem" ubuntu@ec2-3-137-111-157.us-east-2.compute.amazonaws.com
```

### Hosting
- Caddyfile is located in `/home/clarks`
- Site files are located in `/var/www/clarks`

### Caddy
- Good overview of basic Caddy commands: https://caddyserver.com/docs/getting-started
