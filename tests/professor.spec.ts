import { test, expect } from '@playwright/test';

test.describe.only('Test Ivehte Web', () => {
    /**
     * Authentification
     */
    test ('Authentification',async ({ page }) => {
        await page.goto('https://ivehte-enseignement-cicd.deep-tech.studio/login');
        await page.locator('[placeholder="Entrez votre nom d\\\'utilisateur"]').click();
        await page.keyboard.type('professor@yopmail.com');
        await page.locator('[placeholder="Minimum 8 caractères"]').click();
        await page.keyboard.type('123456a!');
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        const connexion = page.locator('text=Se connecter').first();
        await Promise.all([
            connexion.click(),
            expect(page.getByText('© @Copyright IVEHTE 2023, tous droits réservés.')).toBeVisible(),
            expect(page.getByText('Avancement global de la promotion')).toBeVisible()
        ]); 
    });
});