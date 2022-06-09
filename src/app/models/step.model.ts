export class Step {
	iconClassesNames: string;
	prev: boolean;
	next: boolean;

	constructor(iconClassesNames: string, prev: boolean, next: boolean) {
		this.iconClassesNames = iconClassesNames;
		this.prev = prev;
		this.next = next;
	}
}