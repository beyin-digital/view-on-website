import { ApiProperty } from '@nestjs/swagger';

export class UnsubscribeDto {
  @ApiProperty({
    example: 'sub_1NAaqhBs9zGaVmNDaF0K8OQn',
    description: 'Subscription ID',
  })
  subscriptionId: string;

  @ApiProperty({
    example: 'hello world',
    description: 'Keyword user wants to unsubscribe from',
  })
  keyword: string;
}
