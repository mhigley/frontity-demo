import React from "react";
import { connect } from "frontity";
import { DiscussionEmbed, CommentCount } from "disqus-react";

const Comments = ({state}) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  const disqusShortname = "frontity-demo-6lg2vhvdb.vercel.app";

  return (
    <>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={{
          url: `${disqusShortname}${state.router.link}`,
          identifier: post.id,
          title: post.title.rendered
        }}
      />
      <CommentCount
        shortname={disqusShortname}
        config={{
          url: `${disqusShortname}${state.router.link}`,
          identifier: post.id,
          title: post.title.rendered
        }}
      >
        Comments
      </CommentCount>
    </>
  )
}

export default connect(Comments);