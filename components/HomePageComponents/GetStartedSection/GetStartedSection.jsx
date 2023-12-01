import css from './GetStartedSection.module.scss';



const GetStartedSection = () => {
    return (
<div className={css.wrapper}>       
            <div className={css["section-text-content"]}>
                <span className={css["section-subtext"]}>READY TO EMBARK ON YOUR DIGITAL JOURNEY WITH LONDON WEB STUDIO?</span>
                <h2 className={css["section-title"]}>
                Let's start crafting a web presence that
                    <span className={css["color-orange"]}> truly sets you apart</span>
                </h2>
                <button type="button" className={css["button"]}>
          Get Started
        </button>
            </div>
        </div>
    )
}


export default GetStartedSection;