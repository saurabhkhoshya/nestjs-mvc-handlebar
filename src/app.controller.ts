import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // views inspired by
  // https://cloudfour.com/thinks/the-hidden-power-of-handlebars-partials/#fnref-4803-1
  @Get()
  @Render('modules/landing/pages/page-two')
  root() {
    return { message: 'this message should dispaly before partial block layouts/base ', footer:"This message should display in footer" };
  }
}
