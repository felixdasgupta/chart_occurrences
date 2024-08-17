import { Button, Label, Textarea } from "flowbite-react";
import { MdBarChart, MdEditNote } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { formatPhrase } from "../utils";

type PhraseInputs = {
	phrase: string;
};

export const PhraseBox = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<PhraseInputs>();

	const onSubmit: SubmitHandler<PhraseInputs> = (data) => console.log(formatPhrase(data.phrase));

	return (
		<form className='flex w-full items-center justify-center p-4' onSubmit={handleSubmit(onSubmit)}>
			<div className='w-3/4 min-w-md'>
				<div className='mb-2 block'>
					<Label htmlFor='phrase' value='Observe the occurrences of words in a phrase' />
				</div>
				<Textarea
					id='phrase'
					{...register("phrase", { required: true, maxLength: 380 })}
					placeholder='Enter a phrase...'
					maxLength={380}
					required
					rows={4}
				/>
				{errors.phrase && <span className='my-2 block text-rose-600'>{errors.phrase.message}</span>}
				<div className='mb-4 flex gap-2'>
					<Button className='mt-2' type='submit'>
						<MdBarChart className='mr-2 h-5 w-5' />
						Visualize
					</Button>
					<Button color='light' className='mt-2'>
						<MdEditNote className='mr-2 h-5 w-5' />
						Generate Random Phrase
					</Button>
				</div>
			</div>
		</form>
	);
};
