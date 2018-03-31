import { Component, OnInit, Input } from '@angular/core';

const FILLED: string = "fa fa-star";
const HALF_FILLED: string = "fa fa-star-half-o";
const EMPTY: string = "fa fa-star-o";

@Component ({
    selector: 'ac-star-rating',
    template: `<i *ngFor="let star of stars" [class]="getClass(star)" aria-hidden="true"></i>`,
    styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit{
    public numberOfStars: number = 5;
    
    @Input()
    public rating: number;

    public stars: Array<number> = [];
    
    public getClass(index: number): string{

        if (this.starIsLessThanRating(index)){
            return FILLED;
        } else if ( this.isHalfishStar(index) ){
            return this.nextHalfStarRoundUp();            
        } else {
            return EMPTY;
        }
    }

    public ngOnInit(): void{        
        this.stars = Array(this.numberOfStars).fill(0).map((x, i) => i + 1); 
    }

    private isHalfishStar(starIndex: number){ //Can be Half or Full
        return ((starIndex - 1) / this.numberOfStars)  < this.rating;
    }

    private nextHalfStarRoundUp(): string{        
        //Stars wrap to the NEXT half
        if (this.rating % .2 <= .1){
            return HALF_FILLED;
        } else {
            return FILLED;
        }
    }

    private starIsLessThanRating(starIndex: number): boolean{
        return (starIndex / this.numberOfStars ) <= this.rating;
    }    
}