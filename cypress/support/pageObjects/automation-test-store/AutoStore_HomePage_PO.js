

class AutoStore_HomePage_PO {
    accessHomepage(){
        cy.visit("https://automationteststore.com/",{timeout:2000});
    }
    clickOn_HairCare_Link(){
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
}
export default AutoStore_HomePage_PO; 