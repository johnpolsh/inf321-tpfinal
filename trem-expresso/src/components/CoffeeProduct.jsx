import React from "react";

function CoffeeProduct({name, desc, content, align}) {
	return (
		<div>
			{/* <img></img> */}
			<div>
				<h3>{name}</h3>
				<span>{desc}</span>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Aenean vel urna blandit, rhoncus sapien sit amet, sodales
					est. Integer vel mattis nibh. In hac habitasse platea
					dictumst. Curabitur ac faucibus orci. Morbi non sem commodo,
					dictum dui ut, ullamcorper nisi. Pellentesque euismod tellus
					in bibendum imperdiet. Aliquam fermentum mauris orci, vel
					rhoncus lorem vulputate ac. Aliquam in elementum nunc.
					Praesent tempor ante a ipsum finibus, non ultrices neque
					iaculis. Sed luctus feugiat lectus in mollis. Nam porttitor
					nec mauris non suscipit. Suspendisse tincidunt, eros quis
					vulputate maximus, lectus diam tincidunt risus, ac viverra
					lacus sem eu risus. Praesent convallis vulputate purus id
					dignissim. Pellentesque euismod, purus non varius facilisis,
					nulla nunc maximus tortor, in dignissim dui tellus id magna.
					Vestibulum pharetra scelerisque eleifend. Maecenas non
					faucibus odio.
				</p>
			</div>
		</div>
	);
}

export default CoffeeProduct;
