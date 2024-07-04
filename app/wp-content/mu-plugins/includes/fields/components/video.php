<?php

namespace prfwp;
include PRFWP_PATH . "/includes/fields/partials/config.php";

use StoutLogic\AcfBuilder\FieldsBuilder;

$video = new FieldsBuilder( 'video' );
$video
    ->addFile( 'video' )->setWidth( 20 )
    ->setInstructions( 'Will be displayed for both desktop and mobile if second video doesnt specified' )
    ->addNumber( 'new_width' )->setWidth( 20 )
    ->addText( 'video_class', [ 'label' => 'video class' ] )->setWidth( 20 );

return $video;
