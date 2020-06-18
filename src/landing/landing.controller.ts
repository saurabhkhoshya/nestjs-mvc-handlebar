import { Get, Controller, Render } from '@nestjs/common';

@Controller('landing')
export class LandingController {

    @Get()
    @Render('modules/mo-2/pages/page-two')
    root() {
      return { message: 'this message should dispaly before partial block layouts/base ', footer:"This message should display in footer" };
    }
}
