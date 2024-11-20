import { DocumentBuilder } from '@nestjs/swagger';

export class CreateApiDocument {
  private readonly doc: DocumentBuilder = new DocumentBuilder();

  public initializeOptions() {
    return this.doc
      .setTitle('NestJS-Project')
      .setDescription('NestJS-Project-Api-Document')
      .setVersion('1.0')
      .build();
  }
}
