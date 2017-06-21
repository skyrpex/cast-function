import test from 'ava';
import castFunction from './index';

test('casts value to function if not one', t => {
	const unicorn = '🦄';

	t.is(
		castFunction(unicorn)(),
		'🦄',
	);
});

test('does not cast value to function if one', async t => {
	const rainbow = () => '🌈';

	t.is(
		castFunction(rainbow)(),
		'🌈',
	);
});
