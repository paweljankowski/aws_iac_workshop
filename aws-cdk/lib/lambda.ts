import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export class LambdaService extends Construct {

  constructor(scope: Construct, id: string) {
    super(scope, id)

    const handler = new lambda.Function(this, "HelloWorld", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("resources"),
      handler: "index.handler"
    })

    const api = new apigateway.RestApi(this, "HelloWorldApi", {
      restApiName: "HelloWorldApi",
      description: "This is a sample API for AWS CDK"
    })

    api.root.addMethod("GET", new apigateway.LambdaIntegration(handler))
  }
}