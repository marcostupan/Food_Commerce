import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IMask, IMaskInput } from 'react-imask'

import { Head } from '../../../components/Head'
import { PayOrder } from '../../../components/OrderCloseAction/PayOrder'
import { OrderHeader } from '../../../components/OrderHeader'
import { Container, Inner, Form } from './styles'

import { schema, FieldValues } from './validationSchema'
import { useCart } from '../../../hooks/useCart'
import { CustomerData } from '../../../interfaces/CustomerData'

export default function Payment() {
  const { payOrder } = useCart()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => payOrder(data as CustomerData)

  return (
    <Container>
      <Head title='Pagamento' />
      <OrderHeader />
      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Informações Pessoais</h4>

          <div className='field'>
            <label htmlFor='fullName'>Nome e Sobrenome</label>
            {/* <input type="text" id='fullName' autoComplete="name" {...register("fullName")}/> */}

            <Controller
              name='fullName'
              control={control}
              render={({ field }) => (
                <input type='text' id='fullName' autoComplete='name' {...field} />
              )}
            />
            {errors.fullName && <p className='error'>{errors.fullName.message}</p>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='email'>E-mail</label>

              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <input type='text' id='email' autoComplete='email' {...field} />
                )}
              />

              {/* <input type="email" id='email' autoComplete='email' {...register('email')}/> */}
              {errors.email && <p className='error'>{errors.email.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='mobile'>Celular</label>

              <Controller
                name='mobile'
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type='tel'
                    id='mobile'
                    autoComplete='phone'
                    mask={'(00) 90000-0000'}
                    {...field}
                  />
                )}
              />

              {errors.mobile && <p className='error'>{errors.mobile.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='document'>CPF / CNPJ</label>
              <Controller
                name='document'
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type='text'
                    id='document'
                    mask={[
                      { mask: '000.000.000-00', maxLength: 11 },
                      { mask: '00.000.000/0000-00' },
                    ]}
                    {...field}
                  />
                )}
              />
              {errors.document && <p className='error'>{errors.document.message}</p>}
            </div>
          </div>

          <h4>Endereço de entrega</h4>

          <div className='field'>
            <label htmlFor='zipCode'>CEP</label>
            <Controller
              name='zipCode'
              control={control}
              render={({ field }) => (
                <IMaskInput
                  type='text'
                  id='zipCode'
                  mask={'00000-000'}
                  style={{ width: '120px' }}
                  {...field}
                />
              )}
            />
            {errors.zipCode && <p className='error'>{errors.zipCode.message}</p>}
          </div>

          <div className='field'>
            <label htmlFor='street'>Endereço</label>

            <Controller
              name='street'
              control={control}
              render={({ field }) => <IMaskInput type='text' id='street' {...field} />}
            />
            {errors.street && <p className='error'>{errors.street.message}</p>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='number'>Número</label>

              <Controller
                name='number'
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type='text'
                    id='number'
                    {...field}
                  />
                )}
              />
              {errors.number && <p className='error'>{errors.number.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='complement'>Complemento</label>
              <Controller
                name='complement'
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type='text'
                    id='complement'
                    {...field}
                  />
                )}
              />
              {errors.complement && <p className='error'>{errors.complement.message}</p>}
            </div>
          </div>

          <div className='grouped'>
            <div className='fiels'>
              <label htmlFor='neighborhood'>Bairro</label>
              <Controller
                name='neighborhood'
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type='text'
                    id='neighborhood'
                    {...field}
                  />
                )}
              />
              {errors.neighborhood && <p className='error'>{errors.neighborhood.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='city'>Cidade</label>
              <Controller
                name='city'
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type='text'
                    id='city'
                    {...field}
                  />
                )}
              />
              {errors.city && <p className='error'>{errors.city.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='state'>Estado</label>
              <Controller
                name='state'
                control={control}
                render={({ field }) => (
                  <select id='state' {...field}>
                    <option value=''>Selecione</option>
                    <option value='AC'>Acre</option>
                  </select>
                )}
              />
              {errors.state && <p className='error'>{errors.state.message}</p>}
            </div>
          </div>

          <h4>Pagamento</h4>

          <div className='field'>
            <label htmlFor='credit-card-number'>Numero do Cartão</label>

            <Controller
              name='creditCardNumber'
              control={control}
              render={({ field }) => (
                <IMaskInput
                  type='text'
                  id='creditCardNumber'
                  mask={[
                    {
                      mask: '0000 000000 0000',
                      maxLength: 14,
                    },
                    {
                      mask: '0000 000000 00000',
                      maxLength: 15,
                    },
                    {
                      mask: '0000 0000 0000 0000',
                    }
                  ]}
                  {...field}
                />
              )}
            />
            {errors.creditCardNumber && <p className='error'>{errors.creditCardNumber.message}</p>}

          </div>

          <div className='field'>
            <label htmlFor='creditCardHolder'>Nome impresso no Cartão</label>
            <Controller
              name='creditCardHolder'
              control={control}
              render={({field}) =>
                <input type='text'
                id='creditCardHolder'
                {...field}
                />
            }
            />
            {errors.creditCardHolder && <p className='error'>{errors.creditCardHolder.message}</p>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='creditCardExpiration'>Validade (MM/AA)</label>

              <Controller
              name='creditCardExpiration'
              control={control}
              render={({ field }) => (
                <IMaskInput
                  type='text'
                  id='creditCardExpiration'
                  mask={[
                    {
                      mask: 'MM/YY',
                      blocks: {
                        MM: {
                          mask: IMask.MaskedRange,
                          from: 1,
                          to: 12,
                        },
                        YY: {
                          mask: IMask.MaskedRange,
                          from: new Date().getFullYear() - 2000,
                          to: 99,
                        },
                      },
                    },
                  ]}
                  {...field}
                />
              )}
            />
            {errors.creditCardExpiration && <p className='error'>{errors.creditCardExpiration.message}</p>}

            </div>

            <div className='field'>
              <label htmlFor='creditCardSecurityCode'>Código de Segurança (CVV)</label>
              <Controller
              name='creditCardSecurityCode'
              control={control}
              render={({ field }) => (
                <IMaskInput
                  type='text'
                  id='creditCardSecurityCode'
                  mask={'0000'}
                  {...field}
                />
              )}
            />
            {errors.creditCardSecurityCode && <p className='error'>{errors.creditCardSecurityCode.message}</p>}
            </div>
          </div>

          <PayOrder />
        </Form>
      </Inner>
    </Container>
  )
}
