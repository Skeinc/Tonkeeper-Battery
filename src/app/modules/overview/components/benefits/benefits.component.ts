import { Component } from "@angular/core";

@Component({
    selector: 'app-benefits',
    templateUrl: './benefits.component.html',
    styleUrl: './benefits.component.scss',
})
export class BenefitsComponent {
    public benefitsData: any[] = [
        {
            title: 'Seamless Transactions',
            image: 'rocket-icon.png',
            description: 'Effortlessly manage your digital assets without the need for complex procedures. Tonkeeper Battery automates the payment of blockchain fees, allowing you to focus on what matters most—using your tokens and NFTs.',
        },
        {
            title: 'Cost Efficiency',
            image: 'money-icon.png',
            description: 'Save money on transaction fees by using the Tonkeeper Battery. With charges that cover fees automatically, you can conduct multiple transactions without worrying about the additional costs of gas fees.',
        },
        {
            title: 'Privacy and Security',
            image: 'security-icon.png',
            description: 'Your privacy is our priority. Tonkeeper Battery ensures that your transactions are secure and private. With robust encryption and security measures in place, you can confidently manage your digital assets without compromising your personal information.',
        },
        {
            title: 'Easy Battery Charging',
            image: 'like-icon.png',
            description: 'Charging your Tonkeeper Battery is incredibly simple and convenient. You can top up your battery using in-app payments on iOS or with TONs and stablecoins. Just send a few dollars in stablecoins or TONs to the special address battery.ton, and your wallet will be charged.',
        },
    ];
};