# infla - ansible

## Instlation
```bash
$ brew install ansible
```

## Quick Start
### ssh to ec2
```bash
chmod 400 minus-tsunderation.pem
mv minus-tsunderation.pem /Users/XXXXX/.ssh/

ssh -i "/Users/XXXXX/.ssh/minus-tsunderation.pem" ec2-user@52.69.30.232
```

### ping
```
ansible --private-key=/Users/XXXXX/.ssh/minus-tsunderation.pem 52.69.30.232 -m ping 
```

### Execute
```bash
ansible-playbook -i hosts --private-key=/Users/XXXXX/.ssh/minus-tsunderation.pem playbooks/web.yml
```