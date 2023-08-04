export class CartIconComponent{
    constructor(page){
        this.page = page;
        this.cartIcon = page.locator('//a[@class="shopping_cart_link"]');
    }

    async clickCartIcon(){
        await this.cartIcon.click();
    }
}