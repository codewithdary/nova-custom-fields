import '../../../index.css';
import React from "react";
import {FadeIn} from "../../../components/Helper/FadeIn";
import {PageLinks} from "../../../components/Helper/PageLinks";
import moreArticles from "../../../data/news.json"

export const NewsView = () => {
    return (
        <div>
            <div className="mx-auto w-full sm:w-4/5">
                <FadeIn>
                    <header className="mx-auto flex max-w-5xl flex-col text-center">
                        <h1 className="mt-6 font-display text-4xl font-medium tracking-tight text-primary-header [text-wrap:balance] sm:text-6xl">
                            Agoprene wins the Demo Day in front of large crowd
                        </h1>

                        <time
                            dateTime="April 6, 2023"
                            className="order-first text-sm text-primary-header">
                           April 6, 2023
                        </time>

                        <p className="mt-6 sm:mt-10 text-sm font-semibold text-primary-header">
                            by <a href="" className="underline">Code With Dary</a>, Web Developer
                        </p>

                        <img
                            alt=""
                            className="w-full object-cover hover:grayscale-0 rounded-md sm:mt-10 mt-6 grayscale transition-all"
                            src="https://cdn.pixabay.com/photo/2024/01/08/15/54/defile-8495836_1280.jpg"
                        />
                    </header>
                </FadeIn>

                <FadeIn>
                    <div className="whitespace-pre-line sm:pt-10 pt-6 text-primary-header text-lg leading-9">
                        On Thursday, January 25, Agoprene won the Pitch Award at the Venture Lab Demo Day. It was the culmination of twelve months of intensive work in the Venture Lab program, where ten start-ups have developed the commercial side of their scientific discoveries. The company was founded almost four years ago during the CEO Celine Sandberg's master’s degree at NTNU School of Entrepreneurship. As a part of the degree, you must start a company, but almost all of her classmates started software companies, which are common in Norway.
                        <br/>
                        <br/>
                        However, Celine was determined to work with a physical product. Thus, she decided to pursue her idea of utilizing the potential of seaweed to produce sustainable furniture foam. Furniture foam derived from petroleum accounts for 105 million tonnes of CO2 emissions annually. One armchair, for example, emits an average of 43 kg CO2, almost half of which is due to furniture foam. Read more in this interview According to the Principal and anchor for Agoprene, Julie Cordes, it was exactly the ability to present an authentic case compellingly that made the audience of more than 250 people at Vandværket cast a vote in Agoprene's direction.
                        <br/>
                        <br/>
                        'I think the team's pitch was special because of its authenticity, and Agoprene explained its solution in an elegant and simple way. They managed to inspire and convince the audience that their product would be part of our furniture in the future." All ten start-ups and the two company creation projects pitched at the Venture Lab DemoDay have worked with topics such as customer identification, IP rights, business models, and marketing during their time at BII.
                        <br/>
                        <br/>
                        You can get to know more about the start-ups and the company creation projects that presented at Demo Day here: FÆRM Alba Health Fuse Vectors Dawn Bio Metsystem Droplet IV Agoprene Aida Oncology NorFalk Amplify Therapeutics Yeti Foods Fluilux Diagnostics
                    </div>
                </FadeIn>
            </div>

            <div className="sm:w-4/5 w-full mx-auto">
                {moreArticles.length > 0 && (
                    <PageLinks
                        className=""
                        title="More articles"
                        pages={moreArticles.slice(0, 2)}
                    />
                )}
            </div>
        </div>
    )
}
