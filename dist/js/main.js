class Main{

    constructor(){

        const $ = document.querySelector.bind(document);
        // CSS CLASS
        this.cssShowBanner = "banner-payment--show";
        this.cssAnimate = "banner-payment--animate";
        this.cssNavigatorActive = "navigator-content--active";

        this.buttonPlay = $("#buttonPlay");
        this.buttonStop = $("#buttonStop");
        
        this.bannersTypes = new Array();
        this.divBannerDefault = $("#divDefault");
        this.divBannerProducts = $("#divProducts");
        this.bannersTypes.push(this.divBannerDefault);
        this.bannersTypes.push(this.divBannerProducts);
        
        
        
        this.bannersContents = new Array();
        this.divContentsProducts = this.divBannerProducts.querySelectorAll(".navigator-content");
        this.divContentsProducts.forEach((item)=> this.bannersContents.push(item));


        this.buttons = document.querySelectorAll("#divGroupButtons button");
        this.buttons.forEach( (button,index) => button.addEventListener('click', (e)=>{ 
            let target = e.target;
            
            if(!target.classList.contains("selected")){
                this._selectButton(target);
                this._showBanner(target, index);
            }
        } ) );


    }

    _hideBanners(){
        this.bannersTypes.forEach( banner => banner.classList.remove(this.cssShowBanner) );
    }

    _hideBannersContents(){
        this.bannersContents.forEach( banner => banner.classList.remove(this.cssNavigatorActive));
    }

    _showBanner(c, index){
        this._hideBanners();
        this.stop();
        
        if(index != 0){
            this._hideBannersContents();
            this.divBannerProducts.classList.add(this.cssShowBanner);
            this.bannersContents[(index-1)].classList.add(this.cssNavigatorActive);
        }else{
            this.divBannerDefault.classList.add(this.cssShowBanner);
        }

        setTimeout( ()=>{ this.play(); },100);
        

        
    }

    _unselectButtons(){
        this.buttons.forEach(button => button.classList.remove("selected"));
    }

    _selectButton(button){
        if(button){            
            this._unselectButtons();
            button.classList.add("selected");
        }

    }

    play(){
        this.buttonPlay.classList.add("primary");
        this.buttonStop.classList.remove("primary");
        this.bannersTypes.forEach( item => item.classList.add(this.cssAnimate) );
    }

    stop(){
        this.buttonStop.classList.add("primary");
        this.buttonPlay.classList.remove("primary");
        this.bannersTypes.forEach( item => item.classList.remove(this.cssAnimate) );
    }
    reset(){
        this.stop();
        setTimeout( ()=>{ this.play(); },100);
    }
    
}