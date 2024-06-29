import { Component, Input } from "@angular/core";

@Component({
    selector: 'ui-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent {
    // Входной параметр: ID элемента
    @Input() elementID?: string | null = null;

    // Входной параметр: Name элемента
    @Input() elementName?: string | null = null;

    // Входной параметр: Label элемента
    @Input() elementLabel?: string  | null = null;

    // Входной параметр: отключена ли кнопка
    @Input() elementDisable?: boolean;

    // Входной параметр: иконка кноки
    @Input() elementIconPath?: string | null = null;

    // Входной параметр: тип кнопки
    @Input() elementType?: 'primary' | 'secondary' | 'alternative';

    // Входной параметр: высота кнопки
    @Input() elementHeight?: string | null = null;
}