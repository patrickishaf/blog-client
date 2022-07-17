import './PostView.css';

interface PostProps {
    title?: string;
    author?: string;
    date?: string;
    body?: string;
}

const halfBodyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla urna. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Urna molestie at elementum eu facilisis sed odio morbi. Eget mi proin sed libero enim. Quis varius quam quisque id diam vel quam. Duis at tellus at urna condimentum mattis pellentesque. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Ut tellus elementum sagittis vitae et leo. Cursus in hac habitasse platea dictumst quisque sagittis purus. Odio facilisis mauris sit amet. Quis vel eros donec ac odio. Orci a scelerisque purus semper. Amet justo donec enim diam vulputate ut pharetra. Arcu odio ut sem nulla pharetra diam sit amet nisl. Sapien eget mi proin sed libero enim. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Neque viverra justo nec ultrices dui sapien eget mi. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Vitae tortor condimentum lacinia quis vel eros donec ac. Consectetur adipiscing elit pellentesque habitant morbi. Enim tortor at auctor urna nunc id cursus metus. Elit sed vulputate mi sit. Quis viverra nibh cras pulvinar mattis nunc sed. In aliquam sem fringilla ut morbi tincidunt. Orci a scelerisque purus semper. Dignissim sodales ut eu sem integer vitae justo. `;
const bodyText = halfBodyText + halfBodyText;

export default function PostView(props: PostProps) {
    return (
        <div className='postview-root'>
            <h1 className='postview-title postview-title'>{props.title ?? '15 Disadvantages Of Freedom And How You Can Workaround It'}</h1>
            <p className="postview-metadata grey-text">
                written by {props.author ?? '@samurai2099'}
                <br />on {props.date ?? '27 may 2022'}
            </p>
            {<PostBody body={bodyText}/>}
        </div>
    )
}

function PostBody({body}: {body: string}) {
    const firstPartition = body[0];
    const secondPartition = body.substring(1, body.length - 1);
    return (
        <p className='postview-body'>
            <span className='bold-first-letter'>{firstPartition}</span>{secondPartition}
        </p>
    )
}