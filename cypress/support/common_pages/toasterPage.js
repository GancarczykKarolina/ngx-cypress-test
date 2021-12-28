export class ToasterPage {

    clickOnHideOnClickCheckboxes() {
        cy.contains('Hide on click')
        .click()
    
    }

    selectDropdownToastType(toastType) {
        cy.contains('Toast type').parent('.form-group').find('.appearance-outline').click()
        .get('.cdk-overlay-pane')
        .find('.options-list-container')
        .find('.options-list')
        .find('[ng-reflect-value="'+toastType+'"]')
        .click()

        cy.contains('Toast type').parent('.form-group')
        .find('.appearance-outline')
        .find('.select-button')
        .invoke('prop', 'textContent')
        .should('equal', toastType)
    }

    typeTitleAndContent(title) {
        cy.contains('Title').siblings('input').clear().type(title)
    }
}

export const onToasterPage = new ToasterPage()