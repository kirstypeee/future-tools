import * as React from 'react';
import { ITile, IBanner } from 'src/types';
import './home.css';
import * as ReactMarkdown from 'react-markdown';

interface IProps {
    tiles: ITile[];
    banner: IBanner;
}

class Home extends React.Component<IProps, {}> {
    public render() {
        const { tiles, banner } = this.props;

        return (
            <div className="ibm__page-home">
                {banner["banner-image"] && <div className="ibm__home-banner" style={{ backgroundImage: `url(${banner["banner-image"].url})` }}>
                    <div className="ibm__banner-title">{banner.title}</div>
                    <div className="ibm__banner-column">
                        <div className="ibm__banner-text">{banner.details}</div>
                        <div className="ibm__banner-text">{banner.address}</div>
                    </div>
                </div>}
                <div className="ibm__banner-headline">
                    <div className="ibm__headline-text">
                        <ReactMarkdown source={banner.headline} />
                    </div>
                </div>
                <div className="ibm__tile-wrapper">
                    {tiles.map((tile: ITile) => {
                        return (
                            <div className="ibm__tile" style={{ backgroundImage: `url(${tile.backgroundImage.url})` }}>
                                <div className="ibm__red-marker" />
                                <div className="ibm__tile-title">{tile.title}</div>
                                <div className="ibm__tile-image" style={{ backgroundImage: `url(${tile.tileImage.url})` }} />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        );
    }
}

export default Home;
