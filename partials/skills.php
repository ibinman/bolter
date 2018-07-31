<div class="section skills"  b-nav-anchor="skills">
	<div style="background-image:url(css/img/left_obj_03.png)" alt="" class="decoration"></div>
	<div class="container">
		<div class="description">
			<span class="index" count="09">04</span>
			<h2 class="name">Skills</h2>
			<p class="info">Permanence of the stars hundreds of thousands</p>
		</div>
		<div class="details">
			<h1>We are doing a little <br>of this and of that…</h1>
			<ul>
			<?php 
				$skills=[
					55=>"creativity",
					20=>"cooking",
					90=>"development",
					60=>"marketing"
				];
				foreach($skills as $key=>$skill):
			?>
			<li>
				<span class="bar" style="height:<?= $key ?>%"></span>
				<span class="bar-mobile" style="width:<?= $key ?>%"></span>
				<span class="info" style="bottom:<?= $key ?>%">
					<strong><?= $key ?>%</strong>
					<?= $skill ?>
				</span>
			</li>
			<?php endforeach; ?>
			</ul>
		</div>
	</div>	
</div>