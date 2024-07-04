<?php

namespace prfwp;
include PRFWP_PATH . "/includes/fields/partials/config.php";

use StoutLogic\AcfBuilder\FieldsBuilder;

$accordion = new FieldsBuilder( 'accordion' );

$accordion
    ->addRepeater( 'accordion', [
        'min'          => 1,
        'layout'       => 'block',
        'button_label' => 'Add Drawer item'
    ] )
    ->addFields( get_field_partial( 'sub-components.svg', 20 ) )
    ->addTextarea( 'title', [ 'rows' => '2', 'new_lines' => 'br' ] )
    ->setWidth( 25 )
    ->addTextarea( 'text', [ 'rows' => '2', 'new_lines' => 'br' ] )
    ->setWidth( 50 )
    ->endRepeater();


return $accordion;
