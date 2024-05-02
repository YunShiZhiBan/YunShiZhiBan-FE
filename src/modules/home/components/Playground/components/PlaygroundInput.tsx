'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/common/components/ui/button';
import { Checkbox } from '@/common/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/common/components/ui/form';
import { Input } from '@/common/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/common/components/ui/select';
import axios from 'axios';

const formSchema = z.object({
  source_image: z.string().optional(),
  driven_audio: z.string().optional(),
  enhancer: z.string().optional(),
  preprocess: z.string().optional(),
  ref_eyeblink: z.string().optional(),
  ref_pose: z.string().optional(),
  still: z.boolean().optional(),
});
const PlaygroundInput: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      source_image: '',
      driven_audio: '',
      enhancer: 'gfpgan',
      preprocess: 'full',
      ref_eyeblink: '',
      ref_pose: '',
      still: true,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post(
        '/api/data',
        { ...values },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(
          'There has been a problem with your axios operation:',
          error
        );
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="source_image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                source_image
                <span style={{ color: 'hsl(10, 71.5%, 50%)' }}>*</span>
                <span className="ml-1.5" style={{ color: 'hsl(0, 0%, 52.3%)' }}>
                  file
                </span>
              </FormLabel>
              <FormControl>
                <Input type="file" id="source_image" {...field} />
              </FormControl>
              <FormDescription>
                Upload the source image, it can be video.mp4 or picture.png
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="driven_audio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                driven_audio
                <span style={{ color: 'hsl(10, 71.5%, 50%)' }}>*</span>
                <span className="ml-1.5" style={{ color: 'hsl(0, 0%, 52.3%)' }}>
                  file
                </span>
              </FormLabel>
              <FormControl>
                <Input type="file" id="driven_audio" {...field} />
              </FormControl>
              <FormDescription>
                Upload the driven audio, accepts .wav and .mp4 file
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="enhancer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                enhancer
                <span className="ml-1.5" style={{ color: 'hsl(0, 0%, 52.3%)' }}>
                  string
                </span>
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="gfpgan">gfpgan</SelectItem>
                    <SelectItem value="RestoreFormer">RestoreFormer</SelectItem>
                    <SelectItem value="None">None</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Choose a face enhancer</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preprocess"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                preprocess
                <span className="ml-1.5" style={{ color: 'hsl(0, 0%, 52.3%)' }}>
                  string
                </span>
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="full">full</SelectItem>
                    <SelectItem value="crop">crop</SelectItem>
                    <SelectItem value="resize">resize</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>how to preprocess the images</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ref_eyeblink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                ref_eyeblink
                <span className="ml-1.5" style={{ color: 'hsl(0, 0%, 52.3%)' }}>
                  file
                </span>
              </FormLabel>
              <FormControl>
                <Input type="file" id="ref_eyeblink" {...field} />
              </FormControl>
              <FormDescription>
                path to reference video providing eye blinking
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ref_pose"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                ref_pose
                <span className="ml-1.5" style={{ color: 'hsl(0, 0%, 52.3%)' }}>
                  file
                </span>
              </FormLabel>
              <FormControl>
                <Input type="file" id="ref_pose" {...field} />
              </FormControl>
              <FormDescription>
                path to reference video providing pose
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="still"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="ml-1.5">
                still
                <span className="ml-1.5" style={{ color: 'hsl(0, 0%, 52.3%)' }}>
                  boolean
                </span>
              </FormLabel>
              <FormDescription>
                can crop back to the original videos for the full body aniamtion
                when preprocess is full
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PlaygroundInput;