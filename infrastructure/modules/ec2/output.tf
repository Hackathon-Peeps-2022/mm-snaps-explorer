output "output_ec2_id" {
  value = aws_instance.mm-snaps-explorer-ec2.id
}

output "output_ec2_AZ" {
  value = aws_instance.mm-snaps-explorer-ec2.availability_zone
}
