import { Controller, Get } from '@nestjs/common';

@Controller()
export default class SitemapController {

  @Get('/sitemap.xml')
  public async homepage() {
    return 34;
  }
}
