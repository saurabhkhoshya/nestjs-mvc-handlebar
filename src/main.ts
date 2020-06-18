import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  //app.setBaseViewsDir(__dirname); 
  app.setViewEngine('hbs');

  hbs.registerPartials(join(__dirname, '..', 'views/partials'));

//  hbs.registerPartials(join(__dirname, '..', 'views/modules/landing/partials'));
    hbs.registerPartials(join(__dirname, '..', 'views/modules/landing/partials'));
    hbs.registerPartials(join(__dirname, '..', 'views/modules/mo-2/partials'));

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}
bootstrap();
