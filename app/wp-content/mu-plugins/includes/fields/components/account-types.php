<?php

namespace prfwp;

use StoutLogic\AcfBuilder\FieldsBuilder;

include PRFWP_PATH . "/includes/fields/partials/config.php";

$account_types = new FieldsBuilder( 'account_types' );

$account_types
	->addRepeater( 'account_types', [
		'min'          => 1,
		'layout'       => 'block',
		'button_label' => 'Add Row',
		'instructions' => 'Hold "Shift" and hover at row in order to display duplication button',
	] )
	->addTextarea( 'title', [ 'rows' => 1, 'new_lines' => 'br' ] )
    ->addTextarea( 'sub-title', [ 'rows' => 1, 'new_lines' => 'br' ] )
	->addRepeater( 'field', [ 'min' => 1, 'label' => '', 'button_label' => 'Add Field' ] )
    ->setInstructions( 'On value field, insert "v" for check icon, "x" for X icon.' )
	->addTextarea( 'value', [ 'rows' => 1, 'new_lines' => 'br' ] )
    ->setWidth( 10 )
    ->addTextarea( 'text', [ 'rows' => 1, 'new_lines' => 'br' ] )
	->endRepeater()
    ->addFields( get_field_partial( 'sub-components.button') )
	->endRepeater();

return $account_types;
