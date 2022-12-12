/// <reference types="cypress" />

import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";
import AutoStore_HomePage_PO from "../../support/pageObjects/automation-test-store/AutoStore_HomePage_PO";

describe("Add multiple items to basket", () => {
    const autoStore_homePage_PO = new AutoStore_HomePage_PO();
    const autostore_haircare_PO = new AutoStore_HairCare_PO
    before(function () {
        cy.fixture("products").then(function (data) {
            globalThis.data = data;
        });
    });

    beforeEach(function () {
        autoStore_homePage_PO.accessHomepage();
        autoStore_homePage_PO.clickOn_HairCare_Link();
    });
    it("Add specific items to basket", () => {
       autostore_haircare_PO.addHairCareProductsToBasket(); 
    });
});
