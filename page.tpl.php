<?php
//kpr(get_defined_vars());
//kpr($theme_hook_suggestions);
//template naming
//page--[CONTENT TYPE].tpl.php
?>
<?php if( theme_get_setting('mothership_poorthemers_helper') ){ ?>
<!-- page.tpl.php-->
<?php } ?>

<?php print $mothership_poorthemers_helper; ?>

<div class="page">

    <?php if($page['header']) { ?>
    <div class="header">
      <?php print render($page['header']); ?>
    </div> <!-- /header -->
    <?php } ?>
    

    <div role="main" id="main-content">

      <?php if($page['highlighted'] OR $messages){ ?>
        <div class="drupal-messages">
        <?php print render($page['highlighted']); ?>
        <?php print $messages; ?>
        </div>
      <?php } ?>


      <?php print render($page['content_pre']); ?>

      <?php print render($page['content']); ?>

      <?php print render($page['content_post']); ?>

    </div><!-- /main-->
</div><!-- /page-->

<footer role="contentinfo">
  <?php print render($page['footer']); ?>
</footer>

