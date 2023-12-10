import { ShaderMaterial, UniformsUtils, ShaderLib, Color } from 'three';

export class ColoredShadowMaterial extends ShaderMaterial {

	get color() {

		return this.uniforms.diffuse.value;

	}

	get shadowColor() {

		return this.uniforms.shadowColor.value;

	}

	set shininess( v ) {

		this.uniforms.shininess.value = v;

	}
	get shininess() {

		return this.uniforms.shininess.value;

	}

	constructor( options ) {
		var phongShader = ShaderLib['phong'];

		super( {
			uniforms: UniformsUtils.merge( [
				ShaderLib.phong.uniforms,
				{
					shadowColor: {
						value: new Color( 0xff0000 ),
					},
				},
			] ),
			vertexShader: phongShader.vertexShader,
			fragmentShader: phongShader.fragmentShader,

		} );

		Object.defineProperties( this, {
			opacity: {

				set( v ) {

					this.uniforms.opacity.value = v;

				},

				get() {

					return this.uniforms.opacity.value;

				}

			}
		} );

		this.setValues( options );
		this.lights = true;

	}

}
