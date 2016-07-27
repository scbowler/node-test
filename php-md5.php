<?php

$file = 'AWM-Logo.png';

$hash = md5_file($file);

echo "The AWM Logo file hash is: $hash";