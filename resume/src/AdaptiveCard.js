import React from 'react';
import * as AdaptiveCardsAPI from 'adaptivecards';
import * as ACData from "adaptivecards-templating";

class AdaptiveCard extends React.PureComponent {
    componentDidMount() {
        const { card, data } = this.props;
        const adaptiveCard = new AdaptiveCardsAPI.AdaptiveCard();

        var template = new ACData.Template(card);

        var cardPayload = template.expand({
            $root: data
        });

        adaptiveCard.parse(cardPayload);
        adaptiveCard.render(this.el);

        console.log(data);
    }

    componentWillUnmount() {
        // detach any event listeners.
    }

    render() {
        return <div ref={el => this.el = el} />;
    }
}

export default AdaptiveCard;
