export interface MajorCredits {
	_brand: 'major';
	credit: number;
}

export interface MinorCredits {
	_brand: 'minor';
	credit: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
	return { credit: subject1.credit + subject2.credit } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
	return { credit: subject1.credit + subject2.credit } as MinorCredits;
}
