# infla - ansible

## Instlation
```bash
$ brew install ansible
```

## Quick Start
### ssh to ec2
```bash
chmod 400 minus-tsunderation.pem
mv minus-tsunderation.pem /tmp/

ssh -i "/Users/A12319/Downloads/credentials/tomox1001.pem" ec2-user@52.68.93.90
```

### ping
```
ansible -i hosts --private-key=/Users/A12319/Downloads/credentials/tomox1001.pem 52.68.93.90 -m ping 
```

### execute
```bash
# install
ansible-playbook -i hosts --private-key=/Users/A12319/Downloads/credentials/tomox1001.pem playbooks/web/install.yml

# deploy
ansible-playbook -i hosts --private-key=/Users/A12319/Downloads/credentials/tomox1001.pem playbooks/web/deploy.yml
```
