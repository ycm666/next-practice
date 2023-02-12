import Head from "next/head";


const HeadInfo = ({title,keyword,contents}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta keyword={keyword} />
                <meta content={contents} />
            </Head>
        </div>
    )
}

HeadInfo.defaultProps = {
    title: 'My Blog',
    keyword: 'Blog YCM by Next JS',
    contents: 'Blog YCM by Next JS'
}

export default HeadInfo;