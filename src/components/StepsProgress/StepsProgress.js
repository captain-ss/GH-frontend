import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import { ProgressBar, Step } from "react-step-progress-bar";
import './StepsProgress.scss';

function StepsProgress({ progress, stepIndex }) {
	return <ProgressBar percent={progress}>
		<Step>
			{
				({ accomplished, index }) => {
					if (index >= stepIndex) {
						return <img alt="" src="/assets/icons/profile.svg" className={`step-image ${accomplished ? 'grayscale' : ''}`} />
					}
					return <Link to="/create-meal-plan/build-profile"><img alt="" src="/assets/icons/check-white.svg" /></Link>
				}
			}
		</Step>
		<Step>
			{
				({ accomplished, index }) => {
					if (index >= stepIndex) {
						return <img alt="" src="/assets/icons/plan-white.svg" className={`step-image ${accomplished ? 'grayscale' : ''}`} />;
					}
					return <Link to="/create-meal-plan/formulate-plan"><img alt="" src="/assets/icons/check-white.svg" /></Link>;
				}
			}
		</Step>
		<Step>
			{
				({ accomplished, index }) => {
					if (index >= stepIndex) {
						return <img alt="" src="/assets/icons/choose-vendor-white.svg" className={`step-image ${accomplished ? 'grayscale' : ''}`} />;
					}
					return <Link to="/create-meal-plan/choose-vendor"><img alt="" src="/assets/icons/check-white.svg" /></Link>;
				}
			}
		</Step>
	</ProgressBar>
}

export default StepsProgress;