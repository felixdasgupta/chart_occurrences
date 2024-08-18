import { Button, Label, Textarea } from "flowbite-react";
import { MdBarChart, MdEditNote } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSetAtom } from "jotai";
import { savePhraseMap } from "../store";
import { paragraph } from "txtgen";
import { SyntheticEvent } from "react";

export type PhraseInputs = {
	phrase: string;
};

export const PhraseBox = () => {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<PhraseInputs>();

	const savePhrase = useSetAtom(savePhraseMap);
	const onSubmit: SubmitHandler<PhraseInputs> = (data) => {
		savePhrase(data.phrase);
	};
	const generatePhrase = (e: SyntheticEvent) => {
		e.preventDefault();
		setValue("phrase", paragraph(2), {
			shouldValidate: true,
			shouldDirty: true,
		});
	};

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
				{errors.phrase?.message && <span className='my-2 block text-rose-600'>{errors.phrase.message}</span>}
				<div className='mb-4 flex gap-2'>
					<Button className='mt-2' type='submit'>
						<MdBarChart className='mr-2 h-5 w-5' />
						Visualize
					</Button>
					<Button onClick={generatePhrase} color='light' className='mt-2'>
						<MdEditNote className='mr-2 h-5 w-5' />
						Generate Random Phrase
					</Button>
				</div>
			</div>
		</form>
	);
};
