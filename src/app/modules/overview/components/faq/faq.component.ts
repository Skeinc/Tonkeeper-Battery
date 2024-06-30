import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss',
    animations: [
        trigger('expandCollapse', [
            state('collapsed', style({
                height: '0',
                display: 'none',
                opacity: '0'
            })),
            state('expanded', style({
                height: '*',
                display: 'flex',
                opacity: '1'
            })),
            transition('collapsed => expanded', [
                animate('300ms ease-out')
            ]),
            transition('expanded => collapsed', [
                animate('300ms ease-in')
            ])
        ]),
    ],
})
export class FAQComponent implements OnInit{
    public answersFlagsVisible: boolean[] = [];

    public FAQData: any[] = [
        {
            question: 'What is Tonkeeper Battery?',
            answer: 'Tonkeeper Battery is an off-chain account that covers blockchain fees for your transactions, allowing you to use tokens and NFTs without needing TONs for gas fees. It is available in open beta on all mobile platforms.',
        },
        {
            question: 'How do I charge my Tonkeeper Battery?',
            answer: 'You can charge your battery using in-app payments on iOS or by sending stablecoins or TONs to the special address battery.ton. The process is simple and ensures your wallet is ready for transactions.',
        },
        {
            question: 'What types of transactions can I perform with Tonkeeper Battery?',
            answer: 'You can use Tonkeeper Battery for various transactions, including token swaps, token transfers, and NFT transfers. The battery covers the necessary blockchain fees for these operations.',
        },
        {
            question: 'How is the battery measured?',
            answer: 'The battery is measured in charges, with each charge covering the fee for a simple TON transfer. More complex transactions, such as token swaps, may require multiple charges.',
        },
        {
            question: 'What tokens are supported by Tonkeeper Battery?',
            answer: 'Tonkeeper Battery supports a wide range of tokens, including stablecoins and NFTs. We are continually adding support for more tokens to enhance your experience.',
        },
        {
            question: 'Can I request a refund for my battery charges?',
            answer: 'Yes, you can request a refund within the first 14 days of purchase. If you bought the battery through the App Store, the refund process will occur on the App Store side.',
        },
        {
            question: 'Is my information secure with Tonkeeper Battery?',
            answer: 'Absolutely. We prioritize your privacy and security, using robust encryption and security measures to protect your data and transactions.',
        },
        {
            question: 'What happens if my battery runs out of charges?',
            answer: 'If your battery runs out of charges, you will need to recharge it using the available methods (in-app payments or sending stablecoins/TONs) to continue performing transactions without gas fees.',
        },
        {
            question: 'How do I check the status of my battery?',
            answer: 'You can monitor your battery status in real-time within the Tonkeeper app. The app provides a detailed view of your current charges and usage.',
        },
        {
            question: 'How can I participate in the open beta testing of Tonkeeper Battery?',
            answer: 'To join the open beta testing, update your Tonkeeper app to version 4.3 or later on iOS or Android. Follow the instructions to start using and charging your battery, and join our discussion group on Telegram at t.me/batterypublicbeta to share your feedback and suggestions.',
        },
    ];

    ngOnInit(): void {
        this.setAnswersFlagsVisible();
    };

    private setAnswersFlagsVisible(): void {
        for(let index = 0; index < this.FAQData.length; index++) {
            this.answersFlagsVisible.push(false);
        };
    };

    public toggleAnswerFlagVisible(index: number): void {
        this.answersFlagsVisible[index] = !this.answersFlagsVisible[index];
    };
}