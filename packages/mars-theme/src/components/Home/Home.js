import React from "react";
import { Global, connect, Head, css } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "../Header/header";
import List from "../list";
import Post from "../post";
import Loading from "../loading";
import Title from "../title";
import PageError from "../PageError";

import { globalStyles, HeadContainer, Main } from "./style";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  const { mode } = state.theme;
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />
      <Global styles={
        css`
          body {
            background-color: ${mode === 'light' ? '#fff' : '#222'};
            color: ${mode === 'light' ? '#222' : '#fff'};
          }
        `
      } />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);
