/// <reference types = "Cypress"/>
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO';
import HomePage_PO from '../../support/pageObjects/webdriver-uni/HomePage_PO'
describe("Test Contact Us form via WebdriverUni", () => {
    const homepage_PO = new HomePage_PO();
    const contact_us_PO = new Contact_Us_PO();
    before(() => {
        cy.fixture('example').then((data) => {
            //this.date = data;
            globalThis.data = data
        })
    });

    beforeEach(() => {
        homepage_PO.visitHomepage();
        homepage_PO.clickOn_ContactUs_Button();
    });

    it("Should be able to submit a successful submission via contact us form", () => {
        //webdriverUni_ContactForm_Submition(Cypress.env("first_name"),data.last_name,data.email,data.body,'h1','Thank You for your Message!')
        contact_us_PO.Contact_Form_Submission(data.first_name, data.last_name, data.email, data.body, 'h1', 'Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cy.webdriverUni_ContactForm_Submition(data.first_name,data.last_name,' ',data.body,'body','Error') 
        contact_us_PO.Contact_Form_Submission(data.first_name, data.last_name, ' ', data.body, 'body', 'Error')
    });
})
