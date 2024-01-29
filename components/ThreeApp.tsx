import React, { FC } from 'react';
import { css } from '@emotion/css';
import { publicPath } from '../modules/utils';
import { TCanvas } from './three/TCanvas';

export const ThreeApp: FC = () => {
	return (
		<div className={styles.container}>
			<TCanvas />
		</div>
	)
}

const styles = {
	container: css`
		position: relative;
		width: 100vw;
		height: 100vh;
	`
}
