resource "aws_security_group" "my_sg" {
  name        = "${var.maintainer}-sg"
  description = "Allow http, https  and ssh inbound traffic"

  ingress {
    description = "HTTP from all"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["90.79.46.127/32"]
  }

  ingress {
    description = "SSH from all"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["90.79.46.127/32"]
  }


  ingress {
    description = "HTTPS from all"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["90.79.46.127/32"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "${var.maintainer}-sg"
  }
}
