import React from 'react';
import { useFooter } from '../../../hooks';
import './subscription.scss';

export default function Subscription() {
    const data = useFooter();
    const dataSubscription = data?.allStrapiLayout?.nodes[0].footer.subscription;

    return (
        <div className="ContactData__Item">
            <h3 className="titleSubscription">{dataSubscription.title}</h3>
            <form>
                <div className="ContactData__Form d-flex flex-md-column">
                    <label>
                        <input
                            type="email"
                            name="email"
                            value="Enter your mail"
                        />
                    </label>
                    <button type="submit">Subscribe</button>
                </div>
            </form>
        </div>
    )
}
