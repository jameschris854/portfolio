export class PageUtils {
    static config = ({backgroundColor}:{backgroundColor: string}) => {
        let el = document.querySelector<HTMLElement>('.smooth-scroll')
        if(el){
            el.style.backgroundColor = backgroundColor
        }
    }
}
