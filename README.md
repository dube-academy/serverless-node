[![Production Release](https://github.com/dube-academy/serverless-node/actions/workflows/production.yml/badge.svg)](https://github.com/dube-academy/serverless-node/actions/workflows/production.yml)

[https://serverless.academy.dube.io](https://serverless.academy.dube.io)

[![Dev Release](https://github.com/dube-academy/serverless-node/actions/workflows/dev.yml/badge.svg?branch=main)](https://github.com/dube-academy/serverless-node/actions/workflows/dev.yml)

[https://dev.serverless.academy.dube.io](https://dev.serverless.academy.dube.io)

## Requirements

- Node.js Installation
- AWS Account
- AWS CLI Installation (⚠️ Forgot to mention this in the Video)
- GitHub Account

### AWS Permissions

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "ListObjectsInBucket",
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::XXXXXXX-S3_BUCKET_NAME_DEV",
                "arn:aws:s3:::XXXXXXX-S3_BUCKET_NAME"
            ]
        },
        {
            "Sid": "AllObjectActions",
            "Effect": "Allow",
            "Action": "s3:*Object",
            "Resource": [
                "arn:aws:s3:::XXXXXXX-S3_BUCKET_NAME_DEV/*",
                "arn:aws:s3:::XXXXXXX-S3_BUCKET_NAME/*"
            ]
        },
        {
            "Sid": "Cloudformation",
            "Effect": "Allow",
            "Action": [
                "cloudformation:*"
            ],
            "Resource": "*"
        },
        {
            "Sid": "IamGetRole",
            "Effect": "Allow",
            "Action": [
                "iam:GetRole",
                "iam:PassRole"
            ],
            "Resource": "*"
        },
         {
            "Sid": "FunctionListing",
            "Effect": "Allow",
            "Action": [
                "lambda:ListFunctions",
                "lambda:ListEventSourceMappings",
                "lambda:ListLayerVersions",
                "lambda:ListLayers",
                "lambda:GetAccountSettings",
                "lambda:CreateEventSourceMapping",
                "lambda:ListCodeSigningConfigs"
            ],
            "Resource": "*"
        },
        {
            "Sid": "FunctionEditing",
            "Effect": "Allow",
            "Action": "lambda:*",
            "Resource": [
                "XXXXXXX-FUNCTION_ARN",
                "XXXXXXX-FUNCTION_ARN_DEV"
            ]
        }
    ]
}
```
