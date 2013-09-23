<?php
//kpr(get_defined_vars());
//http://drupalcontrib.org/api/drupal/drupal--modules--node--node.tpl.php
//node--article.tpl.php

//$content['field_name']['#theme'] = "nomarkup";
//hide($content['field_name']);
if ($classes) {
  $classes = ' class="'. $classes . ' "';
}

if ($id_node) {
  $id_node = ' id="'. $id_node . '"';
}

hide($content['comments']);
hide($content['links']);
?>

<!-- node.tpl.php -->
<article <?php print $id_node . $classes .  $attributes; ?> role="article">
  <?php print $mothership_poorthemers_helper; ?>

  <?php if (!$page): ?>
    <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>" rel="bookmark"><?php print $title; ?></a></h2>
  <?php endif; ?>
 <p class="back-to"><a href="news">Back to all news</a></p>
 <h1><?php print $title; ?></h1>

  <div class="content">
    <?php print render($content);?>
    <div class="article-right-column">

      <!-- Adding ShareThis code -->
      <h2>Share this article</h2>
      <span class='st_fblike_large' displayText='Facebook Like'></span>
      <span class='st_twitter_large' displayText='Tweet'></span>
      <span class='st_email_large' displayText='Email'></span>
      <span class='st_pinterest_large' displayText='Pinterest'></span>
      <span class='st_sharethis_large' displayText='ShareThis'></span>
    </div>
  </div>
  <h2 class="comments-header">Comments (<?php print $comment_count; ?>)</h2>
  <?php print render($content['comments']); ?>
</article>
